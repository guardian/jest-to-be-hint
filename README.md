# @guardian/jest-to-be-hint

    import { toBeHint } 'jest-to-be-hint';
    expect.extend({ toBeHint });

    expect('foo').toBeHint('bar', 'bar was not foo');

A Jest extension to support hint text on failure.

The initial motivation is for better error reporting in table-driven tests, but
it should be generally useful whenever you have multiple assertions within a
single test.
