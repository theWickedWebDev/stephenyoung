# Image
##### This is used to render an <code><Img/></code> component
<br/>
```
import { Image } from '@thewickedwebdev/components';
```

<br/>

### How to use
This component should be used for all images on the site. It is great because
it will require/warn you if you have not included important
attributes such as alt tag and responsive images.

### API

<pre><code>(ImageType) => React.Node</code></pre>

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Required</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>src</td>
      <td>Yes</td>
      <td>Main image source URL</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>srcSet</td>
      <td></td>
      <td>Set of image sources</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>alt</td>
      <td></td>
      <td>Alternate text for the image</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>title</td>
      <td></td>
      <td>Title of the image</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>className</td>
      <td></td>
      <td>Classname to add to the component	</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>lazy</td>
      <td></td>
      <td>Lazy load the image</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
  </tbody>
</table>
