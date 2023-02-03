#!/usr/bin/env python
import sys
from pkg.init import installer_script
from pkg.graphdb_builder.builder import builder as builder
import pkg.debug as debug

if __name__ == '__main__':

    if len(sys.argv) > 1:
        if sys.argv[1] == 'init':
            installer_script()
        elif sys.argv[1] == 'debug':
            debug.main()
        else:
            builder.main()
