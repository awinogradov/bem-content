# spin

`spin` block indicates the progress of some process (e.g. site page or some media file loading).

Rotation of the `spin` block is implemented by CSS3 animation.

## Modifiers of a block

### _theme

The `spin` block does not have native control representation.

Block supports the following themes:

* simple
* normal (**NB!** Choosing a theme `normal` requires additional modifier [`size`](#size).)

**simple**

```bemjson
{
    block : 'spin',
    mods : { theme : 'simple', progress : true }
}
```

**normal**

```bemjson
{
    block : 'spin',
    mods : { theme : 'normal', size : 'm', progress : true }
}
```

<a name="size"></a>
### _size

Implemented only for theme `normal`.

There are five sizes available: **xs**, **s**, **m**, **l**, **xl**.

<table>
    <tr>
        <th>Block size</th>
        <th>Size, px</th>
    </tr>
    <tr>
        <th>xs</th>
        <td>16px</td>
    </tr>
    <tr>
        <th>s</th>
        <td>24px</td>
    </tr>
    <tr>
        <th>m</th>
        <td>28px</td>
    </tr>
    <tr>
        <th>l</th>
        <td>32px</td>
    </tr>
    <tr>
        <th>xl</th>
        <td>38px</td>
    </tr>
</table>

See following examples:

**XS**

```bemjson
{
    block : 'spin',
    mods : { theme : 'normal', size : 'xs', progress : true }
}
```

```bemjson
{
    block : 'spin',
    mods : { theme : 'normal', size : 's', progress : true }
}
```

```bemjson
{
    block : 'spin',
    mods : { theme : 'normal', size : 'm', progress : true }
}
```

```bemjson
{
    block : 'spin',
    mods : { theme : 'normal', size : 'l', progress : true }
}
```

```bemjson
{
    block : 'spin',
    mods : { theme : 'normal', size : 'xl', progress : true }
}
```

### States of a block

#### _progress

`progress` modifier with `true` value activates the spin. If `progress` modifier is not specified, rotation is paused and `spin` block is hidden from the page.
