# Image

Блок для описания илюстраций где угодно. Блок умеет автоматически оборачиваться в
блок `figure` для поддержания семантичности HTML5.

## Использование блока

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

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>caption</td>
        <td>
            <code>String</code>
        </td>
        <td>Описание изображения. Пересылается в моду caption блока `figure`.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>
            <code>String</code>
        </td>
        <td>Источник изображения</td>
    </tr>
</table>
