#!/usr/bin/env python3
"""Verify live Netlify form components match public/__forms.html per form.

Compares each form-name'd block in both directions. A control is normalized to
(tag, effective_type): inputs default to 'text' when type is absent; select and
textarea use their tag as the kind. Duplicates, kind mismatches, missing fields,
and honeypot differences are all failures (nonzero exit).
"""
import re, sys, pathlib

LIVE_FILES = [
    'src/components/pages/gbyspage/GBYSForm.tsx',
    'src/components/pages/astrapage/AstraForm.tsx',
    'src/components/pages/dhhrm/DHHRMForm.tsx',
    'src/components/pages/membership/MembershipForm.tsx',
]

def forms_in(text):
    """Map form-name -> {'fields': {name: (tag, type)}, 'honeypot': str|None, 'dupes': [names]}."""
    out = {}
    for m in re.finditer(r'<form[^>]*>.*?</form>', text, re.S):
        block = m.group(0)
        name = re.search(r'name="form-name"[^>]*value="([^"]+)"|value="([^"]+)"[^>]*name="form-name"', block)
        if not name:
            continue
        form_name = name.group(1) or name.group(2)
        fields, dupes = {}, []
        for tag in re.finditer(r'<(input|select|textarea)[^>]*name="([^"]+)"[^>]*>', block):
            kind, fname = tag.group(1), tag.group(2)
            if fname == 'form-name':
                continue
            ftype = re.search(r'type="([^"]+)"', tag.group(0))
            eff = (kind, ftype.group(1) if ftype else ('text' if kind == 'input' else kind))
            # checkbox groups legitimately repeat a name; other repeats are bugs
            if fname in fields and eff[1] != 'checkbox':
                dupes.append(fname)
            fields[fname] = eff
        honeypot = re.search(r'(?:netlify-honeypot|data-netlify-honeypot)="([^"]+)"', block)
        out[form_name] = {'fields': fields, 'honeypot': honeypot.group(1) if honeypot else None, 'dupes': dupes}
    return out

detect = forms_in(pathlib.Path('public/__forms.html').read_text())
live = {}
for f in LIVE_FILES:
    live.update(forms_in(pathlib.Path(f).read_text()))

fail = False
def err(msg):
    global fail
    print(msg); fail = True

for name in sorted(set(live) | set(detect)):
    if name not in detect:
        err(f'{name}: live form has NO detection form'); continue
    if name not in live:
        err(f'{name}: detection form has NO live counterpart'); continue
    for side, data in (('live', live[name]), ('detection', detect[name])):
        for d in data['dupes']:
            err(f'{name}: DUPLICATE non-checkbox field {d!r} in {side} form')
    lf, df = live[name]['fields'], detect[name]['fields']
    for extra in sorted(set(lf) - set(df)):
        err(f'{name}: live field {extra!r} missing from detection form')
    for extra in sorted(set(df) - set(lf)):
        err(f'{name}: detection field {extra!r} has no live counterpart')
    for common in sorted(set(lf) & set(df)):
        if lf[common] != df[common]:
            err(f'{name}: field {common!r} kind mismatch live={lf[common]} detect={df[common]}')
    if live[name]['honeypot'] != detect[name]['honeypot']:
        err(f"{name}: honeypot mismatch live={live[name]['honeypot']} detect={detect[name]['honeypot']}")
sys.exit(1 if fail else 0)
