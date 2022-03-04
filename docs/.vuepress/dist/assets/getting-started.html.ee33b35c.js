import{r,o as i,c,a as e,b as o,w as n,F as d,d as a,e as l}from"./app.3dd2a1ba.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const u={},h=e("h1",{id:"getting-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),a(" Getting Started")],-1),g={class:"table-of-contents"},m=a("Sign Up"),k=a("Connect to Envato"),_=a("Using Composer"),f=a("Generate an API token"),b=a("Configure Composer"),v=a("Install a Package"),x=e("h2",{id:"sign-up",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sign-up","aria-hidden":"true"},"#"),a(" Sign Up")],-1),P=a("You can sign up for Package Peak at "),y={href:"https://packagepeak.app",target:"_blank",rel:"noopener noreferrer"},C=a("https://packagepeak.app"),w=a(". There is a 15 day free trial, after which a subscription is $6/mo."),I=e("h2",{id:"connect-to-envato",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#connect-to-envato","aria-hidden":"true"},"#"),a(" Connect to Envato")],-1),A=e("p",null,`From the Package Peak homepage, click the "Authenticate Envato" button to begin authenticating with an Envato account. You'll be asked to give Package Peak permission to access your purchases. Accept to continue.`,-1),E=e("p",null,"Your packages will be queued for syncing to Package Peak and should be available shortly.",-1),S=e("h2",{id:"using-composer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-composer","aria-hidden":"true"},"#"),a(" Using Composer")],-1),j=a("In addition to making your purchases available for download in your Package Peak dashboard, you can use Package Peak as a Composer repository. For more information on managing WordPress sites with Composer, check out "),F={href:"https://roots.io/bedrock/",target:"_blank",rel:"noopener noreferrer"},N=a("Bedrock"),Y=a("."),q=l(`<h3 id="generate-an-api-token" tabindex="-1"><a class="header-anchor" href="#generate-an-api-token" aria-hidden="true">#</a> Generate an API token</h3><p>From your Package Peak dashboard, generate an API token. Copy and paste it, because it won&#39;t be retrievable. You can generate as many API tokens as you need over time, and can revoke them at will.</p><h3 id="configure-composer" tabindex="-1"><a class="header-anchor" href="#configure-composer" aria-hidden="true">#</a> Configure Composer</h3><p>Next you should add Package Peak as a repository in your project&#39;s <code>composer.json</code> file.</p><h4 id="composer-1-10-0" tabindex="-1"><a class="header-anchor" href="#composer-1-10-0" aria-hidden="true">#</a> Composer &gt;= 1.10.0</h4><p>The following instructions will add Package Peak as a repo for your project and add your API token to the <code>auth.json</code> file.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>composer config repositories.packagepeak.app composer https://packagepeak.app
composer config bearer.packagepeak.app &lt;api-token&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container danger"><p class="custom-container-title">Keep Secrets Secret</p><p>You should not commit Composer&#39;s <code>auth.json</code> file:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>echo &quot;auth.json&quot; &gt;&gt; .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><div class="custom-container tip"><p class="custom-container-title">Global Configuration</p><p>Add the <code>--global</code> flag to either of the above commands to set this configuration globally. We don&#39;t recommend this for the repository configuration, as this may confuse other developers working on the project. Since the auth configuration should be .gitignore&#39;d anyway, global configuration may make sense.</p></div><h4 id="composer-1-10-0-1" tabindex="-1"><a class="header-anchor" href="#composer-1-10-0-1" aria-hidden="true">#</a> Composer &lt; 1.10.0</h4><p>These instructions are not regularly reviewed. Composer &lt; 1.10.0 is not officially supported.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>composer config gitlab-domains packagepeak.app
composer config repositories.packagepeak.app composer https://packagepeak.app
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="install-a-package" tabindex="-1"><a class="header-anchor" href="#install-a-package" aria-hidden="true">#</a> Install a Package</h3><p>Installing a WordPress theme or plugin you&#39;ve purchased on Envato is now as simple as:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>composer require wpexplorer/total
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Please see your Package Peak dashboard for package names for each of your purchases.</p>`,16);function B(G,L){const t=r("RouterLink"),s=r("ExternalLinkIcon");return i(),c(d,null,[h,e("nav",g,[e("ul",null,[e("li",null,[o(t,{to:"#sign-up"},{default:n(()=>[m]),_:1})]),e("li",null,[o(t,{to:"#connect-to-envato"},{default:n(()=>[k]),_:1})]),e("li",null,[o(t,{to:"#using-composer"},{default:n(()=>[_]),_:1}),e("ul",null,[e("li",null,[o(t,{to:"#generate-an-api-token"},{default:n(()=>[f]),_:1})]),e("li",null,[o(t,{to:"#configure-composer"},{default:n(()=>[b]),_:1})]),e("li",null,[o(t,{to:"#install-a-package"},{default:n(()=>[v]),_:1})])])])])]),x,e("p",null,[P,e("a",y,[C,o(s)]),w]),I,A,E,S,e("p",null,[j,e("a",F,[N,o(s)]),Y]),q],64)}var V=p(u,[["render",B]]);export{V as default};