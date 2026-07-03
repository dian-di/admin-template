#!/usr/bin/env python3
"""Strip UTF-8 BOM from all config/schema files in the project.

Usage: python scripts/fix-bom.py
"""
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
PATTERNS = ['*.prisma', '*.json', '*.yaml', '*.yml', '*.toml', '.env*']
SKIP = {'node_modules', '@generated', '.git', 'dist', 'build'}

fixed = []
for pat in PATTERNS:
    for p in ROOT.rglob(pat):
        if any(x in p.relative_to(ROOT).parts for x in SKIP):
            continue
        raw = p.read_bytes()
        if raw[:3] == b'\xef\xbb\xbf':
            p.write_bytes(raw[3:])
            fixed.append(str(p.relative_to(ROOT)))

if fixed:
    print(f'Stripped BOM from {len(fixed)} file(s):')
    for f in fixed:
        print(f'  {f}')
else:
    print('No BOM found.')
