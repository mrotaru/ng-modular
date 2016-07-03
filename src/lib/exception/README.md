# Module `lib.exception`

## Provider `exceptionHandler`

Used to decorate `$exceptionHandler`; can be used to configure centralised
exception tracking. Also has a provider used to configure a prefix to be used
with exceptions.

### Config methods
- `config({appErrorPrefix: string})`

### Service methods
None; will return an object with a `config` property, referencing the internal
config object.
