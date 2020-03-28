# Page
##### This is used to render a layout element.
<br/>

```
import { Page } from '@thewickedwebdev/components';
```
<br/>
### How to use
The intended purpose of this component was to be used as the main wrapper for
any page in your application. Nesting `<Section/>` inside is also the best
practice.

### API

**List**

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
      <td>meta</td>
      <td>Yes*</td>
      <td>
        Information passed will be used to generate the `<head/>` section
        of your page. See the `Meta` type for more information.
      </td>
      <td><a href="#">Meta</a></td>
      <td>-</td>
    </tr>
    <tr>
      <td>className</td>
      <td></td>
      <td>Classname to add to the component</td>
      <td>string</td>
      <td>-</td>
    </tr>
    <tr>
      <td>children</td>
      <td></td>
      <td>Main page content</td>
      <td>any</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

meta, location, robots, keywords
