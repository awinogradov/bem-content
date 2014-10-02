# List

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

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>items</td>
        <td>
            <code>Array</code>
        </td>
        <td>Массив элементов списка. Элемент может быть как строкой, так и контентом, включающим в себя другие блоки.</td>
    </tr>
</table>

## Модификаторы блока

### _type

Тип списка: упорядоченный или неупорядоченный.
