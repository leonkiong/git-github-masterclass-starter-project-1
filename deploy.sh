#!/bin/bash
set -e

scp -r ./* leon@165.22.53.96:/home/leon/site-upload/
ssh leon@165.22.53.96 "~/deploy-static-site.sh"
echo "Remote deploy finished."