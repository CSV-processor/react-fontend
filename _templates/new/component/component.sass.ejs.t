---
to: <%= absPath %>/<%= component_name %>.sass
---
.<%= component_name.replace(/([a-z0–9])([A-Z])/g, "$1-$2").toLowerCase() %>
