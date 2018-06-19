# Comunica SPARQL HDT Init Actor

[![npm version](https://badge.fury.io/js/%40comunica%2Factor-init-sparql-ostrich.svg)](https://www.npmjs.com/package/@comunica/actor-init-sparql-ostrich)

A comunica SPARQL [OSTRICH](https://github.com/rdfostrich/) Init Actor.

This module is part of the [Comunica framework](https://github.com/comunica/comunica).

## Install

```bash
$ yarn add @comunica/actor-init-sparql-ostrich
```

## Usage

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
