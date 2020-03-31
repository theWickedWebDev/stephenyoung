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

Best images are rendered the same height/width as their natural height/width. For
example, don't load a 1200x1200 image into a 50x50 container.

### API

<pre><code>(ImageType) => React.Element</code></pre>
<br/>
This component also accepts any other props an `<img/>` takes
<br/>
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
      <td>height</td>
      <td>(Recommended)</td>
      <td>Height of the image</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>width</td>
      <td>(Recommended)</td>
      <td>Width of the image</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>alt</td>
      <td>(Recommended)</td>
      <td>Alternate text for the image</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>title</td>
      <td>(Recommended)</td>
      <td>Title of the image</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>srcSet</td>
      <td></td>
      <td>Set of comma separated image sources</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>sizes</td>
      <td></td>
      <td>Comma separated sizes</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>className</td>
      <td></td>
      <td>Classname to add to the component	</td>
      <td>string</td>
      <td>ImageComponent</td>
    </tr>
    <tr>
      <td>lazy</td>
      <td></td>
      <td>Lazy load the image</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>lazyProps</td>
      <td></td>
      <td>Properties for the Lazy component</td>
      <td><a href="http://localhost:6006/?path=/story/lazy--standard">LazyType</a></td>
      <td>Skeleton.Rect (50px)</td>
    </tr>
  </tbody>
</table>
