import{e as a,o as n,y as l}from"./vendor.js";const t={class:"markdown-body"},p=l(`<h1>Radio \u5355\u9009\u6309\u94AE</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5728\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u5355\u9009</p><h3>\u5B89\u88C5</h3><pre><code class="language-ts"><span class="hljs-keyword">import</span> { Radio,RadioGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h2>\u57FA\u672C\u7528\u6CD5</h2><p>\u901A\u8FC7 <strong>value</strong> \u7ED1\u5B9A\u503C\u5F53\u524D\u9009\u9879\u7684 <strong>label</strong> \u3002\u5E76\u4E14\u5FC5\u987B <strong>RadioGroup</strong> \u548C <strong>Radio</strong> \u76F8\u7ED3\u5408\u8FDB\u884C\u4F7F\u7528</p><pre><code class="language-tsx"><span class="hljs-keyword">const</span> RadioGroupLast = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [radioVal] = useState(<span class="hljs-string">&#39;1&#39;</span>)
  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{radioVal}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{radioVal}</span> <span class="hljs-attr">textPosition</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{radioVal}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
  <span class="hljs-tag">&lt;/&gt;</span></span>
}
</code></pre><h2>\u6C34\u5E73\u4F7F\u7528</h2><pre><code class="language-tsx"><span class="hljs-keyword">const</span> RadioGroupLast = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [radioVal] = useState(<span class="hljs-string">&#39;1&#39;</span>)
  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{radioVal}</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{radioVal}</span> <span class="hljs-attr">textPosition</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{radioVal}</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
  <span class="hljs-tag">&lt;/&gt;</span></span>
}
</code></pre><h2>\u81EA\u5B9A\u4E49\u5C3A\u5BF8</h2><pre><code class="language-tsx"><span class="hljs-keyword">const</span> RadioGroupLast = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [radioVal] = useState(<span class="hljs-string">&#39;1&#39;</span>)
  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{radioVal}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">iconSize</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u5C3A\u5BF812<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">iconSize</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u5C3A\u5BF812<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
  <span class="hljs-tag">&lt;/&gt;</span></span>
}
</code></pre><h2>\u81EA\u5B9A\u4E49\u56FE\u6807</h2><p>\u5EFA\u8BAE <code>iconName</code> <code>iconActiveName</code> \u4E00\u8D77\u4FEE\u6539</p><pre><code class="language-tsx"><span class="hljs-keyword">const</span> RadioGroupLast = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [radioVal] = useState(<span class="hljs-string">&#39;1&#39;</span>)
  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{radioVal}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">iconName</span>=<span class="hljs-string">&quot;checklist&quot;</span> <span class="hljs-attr">iconActiveName</span>=<span class="hljs-string">&quot;checklist&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u56FE\u6807<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">iconName</span>=<span class="hljs-string">&quot;checklist&quot;</span> <span class="hljs-attr">iconActiveName</span>=<span class="hljs-string">&quot;checklist&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u56FE\u6807<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
  <span class="hljs-tag">&lt;/&gt;</span></span>
}
</code></pre><h2>\u89E6\u53D1 change \u4E8B\u4EF6</h2><pre><code class="language-tsx"><span class="hljs-keyword">const</span> RadioGroupLast = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [radioVal] = useState(<span class="hljs-string">&#39;1&#39;</span>)
  <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">v</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(v)
  }
  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{radioVal}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{handleChange}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u89E6\u53D1\u4E8B\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u89E6\u53D1\u4E8B\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
  <span class="hljs-tag">&lt;/&gt;</span></span>
}
</code></pre><h2>Prop</h2><h3>Radio</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u9009\u62E9</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>iconSize</td><td><a href="#/icon">\u56FE\u6807\u5C3A\u5BF8</a></td><td>String\u3001Number</td><td><code>18</code></td></tr><tr><td>iconName</td><td><a href="#/icon">\u56FE\u6807\u540D\u79F0</a>\uFF0C\u9009\u4E2D\u524D(\u5EFA\u8BAE\u548C<code>iconActiveName</code>\u4E00\u8D77\u4FEE\u6539)</td><td>String</td><td><code>&#39;check-normal&#39;</code></td></tr><tr><td>iconActiveName</td><td><a href="#/icon">\u56FE\u6807\u540D\u79F0</a>\uFF0C\u9009\u4E2D\u540E(\u5EFA\u8BAE\u548C<code>iconName</code>\u4E00\u8D77\u4FEE\u6539)</td><td>String</td><td><code>&#39;check-checked&#39;</code></td></tr><tr><td>label</td><td>\u5355\u9009\u6846\u6807\u8BC6</td><td>String\u3001Number\u3001Boolean</td><td>-</td></tr><tr><td>shape</td><td>\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A button\u3001round</td><td>String</td><td>round</td></tr></tbody></table><h3>RadioGroup</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u5F53\u524D\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26\uFF0C\u4E0Elabel\u503C\u4E00\u81F4\u65F6\u5448\u9009\u4E2D\u72B6\u6001</td><td>String\u3001Number\u3001Boolean</td><td>-</td></tr><tr><td>textPosition</td><td>\u6587\u672C\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\uFF1A<code>left</code>,<code>right</code></td><td>String</td><td><code>right</code></td></tr><tr><td>direction</td><td>\u4F7F\u7528\u6A2A\u7EB5\u65B9\u5411 \u53EF\u9009\u503C horizontal\u3001vertical</td><td>String</td><td><code>vertical</code></td></tr></tbody></table><h2>RadioGroup Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u503C\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u9009\u4E2D\u9879\u503C\uFF08label\uFF09\u3010\u8BBE\u7F6Elabel\u540E\u6709\u503C\u3001\u9ED8\u8BA4\u4E3A\u7A7A\u3011</td></tr></tbody></table>`,24),c=[p],d={setup(h,{expose:s}){return s({frontmatter:{}}),(e,j)=>(n(),a("div",t,c))}};export{d as default};
