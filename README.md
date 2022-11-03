# DEPRECATED in favor of https://github.com/comunica/comunica-feature-versioning

-----

# Comunica SPARQL OSTRICH Init Actor

[![Build Status](https://travis-ci.org/rdfostrich/comunica-actor-init-sparql-ostrich.svg?branch=master)](https://travis-ci.org/rdfostrich/comunica-actor-init-sparql-ostrich)
[![npm version](https://badge.fury.io/js/%40comunica%2Factor-init-sparql-ostrich.svg)](https://www.npmjs.com/package/@comunica/actor-init-sparql-ostrich)

A comunica SPARQL [OSTRICH](https://github.com/rdfostrich/) Init Actor
for querying versioned triple stores with [OSTRICH](https://github.com/rdfostrich/).

This module is part of the [Comunica framework](https://comunica.dev/).

## Install

OSTRICH requires ZLib, Kyoto Cabinet and CMake (compilation only) to be installed.

```bash
$ yarn add @comunica/actor-init-sparql-ostrich
```

## Usage from the command line

Show 100 triples from version 1 from an OSTRICH store:

```bash
$ comunica-sparql-ostrich ostrichFile@myStore.ostrich "CONSTRUCT WHERE { GRAPH <http://graph.version.1> { ?s ?p ?o } } LIMIT 100"
```

Show 100 triples from the latest version from an OSTRICH store:

```bash
$ comunica-sparql-ostrich ostrichFile@myStore.ostrich "CONSTRUCT WHERE { ?s ?p ?o } LIMIT 100"
```

Show the help with all options:

```bash
$ comunica-sparql-ostrich --help
```

_[**Read more** about querying from the command line](https://comunica.dev/docs/query/getting_started/query_cli/)._

### Usage within application

This engine can be used in JavaScript/TypeScript applications as follows:

```javascript
const newEngine = require('@comunica/actor-init-sparql-ostrich').newEngine;
const myEngine = newEngine();

const result = await myEngine.query(`
  SELECT ?s ?p ?o WHERE {
    ?s ?p <http://dbpedia.org/resource/Belgium>.
    ?s ?p ?o
  } LIMIT 100`, {
  sources: [{ type: 'ostrichFile', value: 'myStore.ostrich' }],
});

// Consume results as a stream (best performance)
result.bindingsStream.on('data', (binding) => {
    console.log(binding.get('?s').value);
    console.log(binding.get('?s').termType);

    console.log(binding.get('?p').value);

    console.log(binding.get('?o').value);
});

// Consume results as an array (easier)
const bindings = await result.bindings();
console.log(bindings[0].get('?s').value);
console.log(bindings[0].get('?s').termType);
```

_[**Read more** about querying an application](https://comunica.dev/docs/query/getting_started/query_app/)._

### Usage as a SPARQL endpoint

Start a webservice exposing http://fragments.dbpedia.org/2015-10/en via the SPARQL protocol, i.e., a _SPARQL endpoint_.

```bash
$ comunica-sparql-ostrich-http ostrichFile@myStore.ostrich
```

Show the help with all options:

```bash
$ comunica-sparql-ostrich-http --help
```

The SPARQL endpoint can only be started dynamically.
An alternative config file can be passed via the `COMUNICA_CONFIG` environment variable.

Use `bin/http.js` when running in the Comunica monorepo development environment.

_[**Read more** about setting up a SPARQL endpoint](https://comunica.dev/docs/query/getting_started/setup_endpoint/)._
