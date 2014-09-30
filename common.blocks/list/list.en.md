__Block: List__

Use for create ordered and unordered lists.

Block usage:

``` js
{
    block : 'list',
    mods : { type: 'unordered' },
    items : [ 'first', 'second' ]
}
```

Block usage for nested lists:

``` js
{
    block : 'list',
    items : [
        'simple',
        [
            'nested list',
            {
                block : 'list',
                mods : { type: 'ordered' },
                items : [ 'first', 'second' ]
            }
        ]
    ]
}
```
