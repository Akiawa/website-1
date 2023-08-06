import{_ as e,v as a,b as t,R as o}from"./chunks/framework.d1204a03.js";const f=JSON.parse('{"title":"Metadata Parameter","description":"","frontmatter":{"title":"Metadata Parameter","lang":"en-US"},"headers":[],"relativePath":"help/contribution/extension-development/metadata.md","filePath":"help/contribution/extension-development/metadata.md"}'),s={name:"help/contribution/extension-development/metadata.md"},n=o(`<h1 id="the-metadata-parameter" tabindex="-1">The Metadata Parameter <a class="header-anchor" href="#the-metadata-parameter" aria-label="Permalink to &quot;The Metadata Parameter&quot;">​</a></h1><p>Any function that returns the <a href="./model-reference.html#pageddata">PagedData</a> object will also accept a parameter called <code>metadata</code> with type <code>any</code>. However, it is unclear how this parameter actually works just from looking at the method signature.</p><p>Metadata has a type signature of <code>any</code> because it can be used however the source developer works. The purpose of <code>metadata</code> is to carry information between method calls, or a rudimentary method of keeping state.</p><p>One of the parameters in <a href="./model-reference.html#pageddata">PagedData</a> is <code>metadata</code>, which also has a type value of <code>any</code>. When a method containing <code>metadata</code> is first called, <code>metadata</code> will be null. Future invocations of the method will use the value of <code>metadata</code> from the last invocation&#39;s PagedData&#39;s <code>metadata</code> field.</p><p>For example, if I return a paged object that contains the following fields:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">createPagedObject</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">results</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">metadata</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>The next time the same method is called again, it will be called with this signature: <code>(..., 1)</code>.</p><p>The purpose of metadata is mostly for pagination. Methods such as searching are called once to get the initial results and again every time the user scrolls down. If the user scrolls down, we don&#39;t want to show the first page of results again, but rather the second page of results. This is useful when there are hundreds of pages of results, because otherwise it would take too much time to fetch all 100 pages if the user is only interested in the first few pages.</p><p>Most developers return an object with the page number, although it is not necessary to return an object.</p><h2 id="example-implementation-of-metadata" tabindex="-1">Example Implementation of Metadata <a class="header-anchor" href="#example-implementation-of-metadata" aria-label="Permalink to &quot;Example Implementation of Metadata&quot;">​</a></h2><p>See the <a href="./function-definitions.html#example-implementation-4">example implementation of the <code>searchRequest</code> method</a> on how to use the metadata parameter.</p>`,11),l=[n];function r(p,i,d,c,h,m){return a(),t("div",null,l)}const y=e(s,[["render",r]]);export{f as __pageData,y as default};
