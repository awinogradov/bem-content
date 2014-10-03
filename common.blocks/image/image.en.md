# Image

Block for make illustrations in text and everywhere. Block with magic will be wrapped
to block `figure` for pretty HTML5 semantic.

## Block usage

``` js
{
    block : 'image',
    url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png'
},
{
    block : 'image',
    url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png',
    caption : 'BEM logo from GitHub'
},
{
    block : 'image',
    url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png',
    caption : 'BEM logo from GitHub',
    attrs : { width : '60px', height: '50px' }
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
        <td>caption</td>
        <td>
            <code>String</code>
        </td>
        <td>Caption for image. Will be translated to `figure` caption.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>Image source url.</td>
    </tr>
</table>
