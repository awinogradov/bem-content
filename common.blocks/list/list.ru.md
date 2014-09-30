__Блок: List__

Используется для создания ordered и unordered списков.

Использование блока:

``` js
{
    block : 'list',
    mods : { type: 'unordered' },
    items : [ 'first', 'second' ]
}
```

Использование блока для реализации вложенных списков:

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
