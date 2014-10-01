__Block: List__

Use for create ordered and unordered lists.

Block usage:

``` js
{
    block : 'list',
    items: [ 'unordered 1', 'unordered 2' ]
}
```

Block usage for ordered lists:

``` js
{
    block : 'list',
    mods: { type : 'ordered' },
    items: [ 'ordered 1', 'ordered 2' ]
}
```

Block usage for nested lists:

``` js
{
    block : 'list',
    items : [
        'nested list 1',
        [
            'nested list 2',
            {
                block : 'list',
                items : [ 'nested 1', 'nested 2' ]
            }
        ]
    ]
}
```
