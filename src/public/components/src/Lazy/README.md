# Lazy
##### Lazy load any React.Element or HTMLElement
<br/>
```
import { Lazy } from '@thewickedwebdev/components';
```
### TODO
Add a prop for noScript that bypasses Lazy when JS is turned off

<br/>

### How to use
Wrap this component around any element you wish to hide from the client
until it becomes visible on the screen. There is an optional `offset` prop
you can pass as well.
<br/>
<br/>
A GREAT use for this component would be to wrap any 3rd Party tools that render
content below the fold and do NOT have any SEO value. This will allow the page
to load quicker and with fewer bytes.

(As long as you load the script inside the component and not in `<head/>`)

### API

<pre><code>(LazyType) => React.Element</code></pre>
<br/>
If Javascript is turned off, you will only ever see the `Skeleton` or `null`
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
      <td>children</td>
      <td></td>
      <td>Content to be lazy loaded</td>
      <td>React.Element</td>
      <td>empty div</td>
    </tr>
    <tr>
      <td>skeleton</td>
      <td></td>
      <td>What to render before the main content is loaded.</td>
      <td>React.Element</td>
      <td><div/></td>
    </tr>
    <tr>
      <td>offset</td>
      <td></td>
      <td>Pixel amount from bottom of screen to load the content. 100px will render the content when the component is less than 100px from the bottom of the window</td>
      <td>number</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
