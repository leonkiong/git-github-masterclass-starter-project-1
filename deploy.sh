#!/bin/bash
set -e

ssh leon@165.22.53.96 "rm -rf /home/leon/site-upload/*"
scp *.html leon@165.22.53.96:/home/leon/site-upload/
scp -r assets leon@165.22.53.96:/home/leon/site-upload/
ssh leon@165.22.53.96 "~/deploy-static-site.sh"
echo "Remote deploy finished."