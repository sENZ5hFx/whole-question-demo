#!/usr/bin/env python3
"""Verify this public package locally. No network or installation."""
import hashlib,json,subprocess
from pathlib import Path
p=Path(__file__).resolve().parent
proof=json.loads((p/'PROOF.json').read_text())
for name,expected in proof['sha256'].items():
 assert Path(name).name==name, 'Manifest path must be a local filename'
 assert hashlib.sha256((p/name).read_bytes()).hexdigest()==expected, 'Hash mismatch: '+name
print('Manifest hashes match. Hashes are integrity checks, not independent validation.')
subprocess.run(['node','--test',str(p/'engine.test.cjs')],check=True)
