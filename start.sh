#!/bin/sh

# Start the first process
json-server --watch db.json --port 3010 &
status=$?
if [ $status -ne 0 ]; then
  echo "Failed to start json-server: $status"
  exit $status
fi

# Start the second process
serve -s dist -l 5000 &
status=$?
if [ $status -ne 0 ]; then
  echo "Failed to start serve: $status"
  exit $status
fi

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?
