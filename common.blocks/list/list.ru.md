__Блок: List__

Используется для создания ordered и unordered списков.

Использование блока:

``` js
{
    block : 'list',
    items: [ 'unordered 1', 'unordered 2' ]
}
```

Использование блока с упорядоченным списком:

``` js
{
    block : 'list',
    mods: { type : 'ordered' },
    items: [ 'ordered 1', 'ordered 2' ]
}
```

Использование блока для реализации вложенных списков:

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
