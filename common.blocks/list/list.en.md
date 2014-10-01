# List

Block `list` need for create ordered and unordered lists.

Block usage:

``` js
{
    block : 'list',
    items: [ 'unordered 1', 'unordered 2' ]
}
```

Block usage with ordered list:

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

## Custom fields of a block

The following custom fields could be specified in BEMJSON declaration of the block:

<table>
    <tr>
        <th>Custom field name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>items</td>
        <td>
            <code>Array</code>
        </td>
        <td>Array of list elements. Element can be string or content, including other blocks.</td>
    </tr>
</table>

## Modifiers of a block

### _type

List type: ordered or unordered.
