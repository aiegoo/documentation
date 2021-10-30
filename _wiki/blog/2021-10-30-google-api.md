---
layout: post
title: "Google's Dialogflow APIs"
name: "google-api"
tags: [api]
tagName: api
permalink: 2021-10-30-google-api.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: school
keywords: "api"
summary: "Sat, Oct 30, 21, google offical doc and setup instruction"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2021-10-30T09:47:51 +0900
updated: 2021-10-30 09:47
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

## Thi

{% assign img-url = '/img/post/api' %}

Google's documentation is like an ocean. It's not easy to find a right one to start. This note contains only basic things that I've already worked with. Trying your own hand at Google's APIs will help you understand more.

👉 Note: [Google OAuth 2.0 with NodeJS](/google-oauth-2.0-nodejs/).
👉 Repo: [dinhanhthi/google-api-playground](https://github.com/dinhanhthi/google-api-playground) (private).

## Official documentation

<details>
<summary>click to open</summary>

<p>
<ol>
     <li>
          <p><a href="https://cloud.google.com/dialogflow/es/docs/reference">APIs &amp; references</a> -- the root of
               all things.</p>
          <ol>
               <li><a href="https://cloud.google.com/dialogflow/es/docs/reference/libraries/nodejs">Node.js client
                         library</a> -- wanna use in a backend?<ol>
                         <li><a href="https://googleapis.dev/nodejs/dialogflow/latest/index.html">Dialogflow SDK Client
                                   Reference</a></li>
                         <li><a href="https://github.com/googleapis/nodejs-dialogflow">googleapis/nodejs-dialogflow</a>
                              -- Github repo.<ol>
                                   <li><a href="https://github.com/googleapis/nodejs-dialogflow#samples">Samples</a> --
                                        wanna run these? Step to <a href="#run-samples">this section</a>.</li>
                              </ol>
                         </li>
                    </ol>
               </li>
               <li><a href="https://cloud.google.com/dialogflow/docs/reference/rest">REST APIs</a> -- wanna use
                    <code>GET</code>, <code>POST</code>,...?</li>
          </ol>
     </li>
     <li>
          <p><a href="https://cloud.google.com/dialogflow/es/docs/reference/rest/v2-overview#service-endpoint">Service
                    endpoint</a>.</p>
          <div class="info">
               <p>💡 <strong>Tip</strong>: <code>us-dialogflow.googleapis.com</code> and
                    <code>dialogflow.googleapis.com</code> are the same, so you can use
                    <code>&lt;location&gt;-dialogflow.googleapis.com</code> in your codes.</p>
          </div>
     </li>
     <li>
          <p><a href="https://cloud.google.com/dialogflow/es/docs/how/region#regions">Available regions</a> (used in
               <code>locations</code>).</p>
          <div class="info">
               <p>💡 <strong>Tip</strong>: <code>&lt;region&gt;-dialogflow.googleapis.com</code> = endpoint.</p>
          </div>
     </li>
     <li>
          <p><a href="https://github.com/google/google-api-javascript-client">google/google-api-javascript-client</a> --
               aka <code>gapi</code>. Github repo.</p>
     </li>
     <li>
          <p><a href="https://developers.google.com/apis-explorer/">Google APIs Explorer</a>.</p>
     </li>
     <li>
          <p><a href="https://developers.google.com/oauthplayground/">OAuth 2.0 Playground</a>.</p>
     </li>
     <li>
          <p><a href="https://cloud.google.com/iam/docs/understanding-roles?authuser=1&amp;_ga=2.35673635.-287242851.1634158283#dialogflow-roles">Understand
                    roles</a> -- If you decide to create a service account, you will need to assign a role to some
               users/emails. Each role has different rights to use your data.</p>
     </li>
</ol>
</p>

</details>

## Wanna run the Node.js samples?{:#run-samples}

👉 Link of [all samples on github](https://github.com/googleapis/nodejs-dialogflow#samples).

{{site.data.alerts.note}}
<p>
The old version uses <a href="https://www.npmjs.com/package/dialogflow" rel="nofollow"><code>dialogflow</code></a> and <a href="https://www.npmjs.com/package/@types/dialogflow" rel="nofollow"><code>@type/dialogflow</code></a>. The new version uses only one <a href="https://www.npmjs.com/package/@google-cloud/dialogflow" rel="nofollow"><code>@google-cloud/dialogflow</code></a>!
:::</p>
{{site.data.alerts.end}}

<details>
<summary>steps</summary>

<p>
<ol>
     <li>
          <p>Create a folder, eg. <code>/home/thi/df-samples/</code></p>
     </li>
     <li>
          <p>If you come from <a href="https://dialogflow.cloud.google.com/#/agents">Dialogflow Console</a> &gt; choose
               an agent &gt; click on the gear next to the its name &gt; Click on "Project ID" to open Google Cloud
               Platform Console.</p>
     </li>
     <li>
          <p>If you come from GCP Console, it's the same.</p>
     </li>
     <li>
          <p>Follow <a href="https://cloud.google.com/storage/docs/reference/libraries#setting_up_authentication">these
                    steps</a> to generate a JSON key (you'll download a JSON file). Store your JSON file in
               <code>df-samples/credential.json</code>. <strong>Note down</strong> the <em>project_id</em>, we will use
               it later, eg. <code>project_abc</code>.</p>
     </li>
     <li>
          <p>Run each time you wanna test <code>export
                    GOOGLE_APPLICATION_CREDENTIALS="/home/thi/df-samples/credential.json"</code> OR save this line to
               <code>/home/thi/.bashrc</code> or <code>/home/thi/.zshrc</code> (if you <a
                    href="/terminal/#zsh-linux">use ZSH</a>) and then refresh the current terminal (with this method,
               you don't need to run again previous line).</p>
          <div class="info">
               <p><strong>Alternative</strong>: You don't have to use system variable
                    <code>GOOGLE_APPLICATION_CREDENTIALS</code> if you don't want. In <code>credential.json</code>, copy
                    <code>private_key</code> and <code>client_email</code> and then use them as,</p>
               <pre
                    class="language-js"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-js"><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AgentsClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span><br>    credentials<span class="token operator">:</span> <span class="token punctuation">{</span> private_key<span class="token punctuation">,</span> client_email <span class="token punctuation">}</span><br><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
          </div>
     </li>
     <li>
          <p>Go to <code>/df-samples/</code> and run <code>npm i @google-cloud/dialogflow</code>.</p>
     </li>
     <li>
          <p>Try this <a
                    href="https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/quickstart.js">quickstart.js</a>.
          </p>
     </li>
     <li>
          <p>On terminal, run</p>
          <pre
               class="language-bash"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-bash">node quickstart.js project_abc</code></pre>
     </li>
     <li>
          <p>Read carefully the content of each file in <a
                    href="https://github.com/googleapis/nodejs-dialogflow/tree/main/samples">samples</a>, you have to
               put the corresponding inputs for the sample to work!</p>
     </li>
</ol>
</p>

</details>

----

<details>
<summary>try something outside 'samples'</summary>

<p>       
In case you wanna try something outside the files given in <a
     href="https://github.com/googleapis/nodejs-dialogflow/tree/main/samples">samples</a>. Check 
     <a href="https://googleapis.dev/nodejs/dialogflow/latest/index.html">this SDK</a>. Suppose we wanna try this one -- <a
     href="https://googleapis.dev/nodejs/dialogflow/4.5.0/v2.AgentsClient.html#searchAgents"><code>AgentsClient.searchAgents()</code></a>
<ol>
     <li>Make the same things in "Step by step". At step 7, create <code>search-agents.js</code> with the same content
          as <a
               href="https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/set-agent.js"><code>samples/set-agent.js</code></a>.
          We are going to change this file.</li>
     <li>Read the <a
               href="https://googleapis.dev/nodejs/dialogflow/4.5.0/v2.AgentsClient.html#searchAgents">reference</a>,
          change the input. Here is <a href="https://gist.github.com/dinhanhthi/b40217eff2b938ffbfece82de8bb0907">an
               example</a>,</li>
</ol>
<pre>
{% highlight js %}

    "use strict";
    async function main() {
    const location = "global";
    const { AgentsClient } = require("@google-cloud/dialogflow");
    const parent = (location) => "projects/-" + "/locations/" + location;
    const client = new AgentsClient({
        credentials: { private_key, client_email },
        apiEndpoint: location + "-dialogflow.googleapis.com",
    });
    async function searchAgents() {
        const request = { parent: parent(location) };
        const [response] = await client.searchAgents(request);
        console.log(`response: ${JSON.stringify(response, null, 2)}`);
    }
    await searchAgents();
    }
    process.on("unhandledRejection", (err) => {
    console.error(err.message);
    process.exitCode = 1;
    });
    main();

{% endhighlight %}
</pre>
    Then run `node search-agents.js`.

</p>

</details>

<hr />

<details>
<summary>Different locations?</summary>

<p>
The example in "Try something outside..." gives us an example of using different regions. Below are some remarks:
<ol>
     <li>
          <p>On <a href="https://dialogflow.cloud.google.com/">DF console</a>, you can create some agents in a different
               regions, default is <code>global</code> (or <code>us</code>).</p>
     </li>
     <li>
          <p>On the Google's documentations, they don't mention about the usage of location. If they say <code>parent =
                    "projects/-"</code>, we shoud use <code>parent = "projects/-" + "/locations/" + location</code>
               where <code>location</code> can be <a
                    href="https://cloud.google.com/dialogflow/es/docs/how/region#regions">one of "Region ID"</a>.</p>
     </li>
     <li>
          <p>Change also the endpoint, option <code>apiEndpoint</code> in <a
                    href="https://googleapis.dev/nodejs/dialogflow/latest/v2.AgentsClient.html"><code>AgentsClient</code>'s
                    constructor</a>, for example.</p>
          <pre
               class="language-js"><div class="copy"><i class="fontello-icon icon-clone"></i></div><code class="language-js"><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AgentsClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span><br>    apiEndpoint<span class="token operator">:</span> location <span class="token operator">+</span> <span class="token string">"-dialogflow.googleapis.com"</span><span class="token punctuation">,</span><br><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
     </li>
</ol>
</p>

</details>

{{site.data.alerts.hr_faded}}

## Wanna try `gapi` (JS client)?

{{site.data.alerts.callout_primary}}
<p>
Google has announced that <a href="https://developers.googleblog.com/2021/08/gsi-jsweb-deprecation.html" rel="nofollow">they will be discontinuing the Google Sign-In JavaScript Platform Library for web</a>. You will have to switch to using <em>Google Identity Services</em> (or <a href="https://developers.google.com/identity/gsi/web/guides/client-library" rel="nofollow">Sign In With Google</a> or <code>gsi</code>). The old service will be <strong>completely discontinued on March 31, 2023</strong>.</p>
<pre>
{% highlight html %}

<!-- OLD -->
<script src="https://apis.google.com/js/platform.js" async defer></script>

<!-- NEW -->
<script src="https://accounts.google.com/gsi/client" async defer></script>

{% endhighlight %}
</pre>
{{site.data.alerts.end}}

What's this `gapi`? You can use it completely inside an HTML file without using any backend.

👉 [List of samples](https://github.com/google/google-api-javascript-client/tree/master/samples).
👉 You have to use [REST API](https://cloud.google.com/dialogflow/es/docs/reference/rest) in this case.


{{site.data.alerts.note}}
<div markdown="1">
💡 **Tip**: If you are using [VSCode](/visual-studio-code/), you can install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension to quickly create a server (port `5500` by default). Just click the button at the bottom right of the file and a website will appear.
</div>
{{site.data.alerts.end}}

<details markdown="1">
<summary>Steps</summary>

<p>

     <ol>
          <li>For setting up, follow <a href="https://console.developers.google.com/apis/library">these steps</a>.</li>
          <li>After that, you should obtain an <code>API_KEY</code> and an <code>CLIENT_ID</code>.</li>
          <li>First, try <a
                    href="https://github.com/google/google-api-javascript-client/blob/master/samples/authSample.html">this
                    sample</a>.</li>
          <li>Using something like <a
                    href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live Server</a> and
               open <code>authSample.html</code>.</li>
          <li>Make a test.</li>
     </ol>
     <div class="warning">
          <ul>
               <li>Make sure you create the "OAuth consent screen" before you create "OAuth 2.0 Client IDs". The
                    "consent screen" is the popup window that contains all the information about the scopes your app
                    will ask users for permission.</li>
               <li>Make sure you add <code>http://localhost:5500</code> (which is created in step 4) to "Authorized
                    JavaScript origins" and "Authorized redirect URIs". You may have to wait a few "ten minutes" for
                    everything to work. Without this step, you may encounter the error <code>mismatch_uri</code>.</li>
          </ul>
     </div>

</p>
</details>

{{site.data.alerts.callout_warning}}
<div markdown="1">
- Make sure you create the "OAuth consent screen" before you create "OAuth 2.0 Client IDs". The "consent screen" is the popup window that contains all the information about the scopes your app will ask users for permission.
- Make sure you add `http://localhost:5500` (which is created in step 4) to "Authorized JavaScript origins" and "Authorized redirect URIs". You may have to wait a few "ten minutes" for everything to work. Without this step, you may encounter the error `mismatch_uri`.
</div>
{{site.data.alerts.end}}

<details>
<summary>Examples</summary>

<p>

<code>projects.agent.search</code>
<ul>
<li><code>GET https://{endpoint}/v2/{parent=projects/*}/agent:search</code></li>
<li><strong>REST</strong>: <a href="https://cloud.google.com/dialogflow/es/docs/reference/rest/v2/projects.agent/search" rel="nofollow">.../v2/projects.agent/search</a></li>
<li><strong>SDK</strong>: <a href="https://googleapis.dev/nodejs/dialogflow/latest/v2.AgentsClient.html#searchAgents" rel="nofollow">.../v2.AgentsClient.html#searchAgents</a></li>
</ul>

<code>projects.agent.sessions.detectIntent</code>
<ul>
<li><code>POST https://{endpoint}/v2/{session=projects/*/locations/
*/agent/sessions/*}:detectIntent</code></li>
<li><strong>REST</strong>: <a href="https://cloud.google.com/dialogflow/es/docs/reference/rest/v2/projects.agent.sessions/detectIntent" rel="nofollow">.../v2/projects.agent.sessions/detectIntent</a></li>
<li><strong>SDK</strong>: <a href="https://googleapis.dev/nodejs/dialogflow/latest/v2.SessionsClient.html#detectIntent" rel="nofollow">.../v2.SessionsClient.html#detectIntent</a>
:::</li>
</ul>
</p>

</details>


## Dialogflow REST APIs with Postman

👉 [Check this official guide](https://github.com/GoogleCloudPlatform/dialogflow-integrations/blob/master/dialogflow-api-quick-start/postman/README.md).

<details>
<summary>Additional configurations</summary>

<p>
<ul><li>Create a collection and add the Authorization for this collection. All of its request will use the same auth method.</li><li>Create variables (on tab "Variables") to store "CLIENT ID" (<code>client_id</code>) and "CLIENT SECRET" (as <code>client_secret</code>), then use them in the form by <code>{{client_id}}</code> and <code>{{client_secret}}</code>.</li></ul>
</p>

</details>

{{site.data.alerts.hr_faded}}

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
