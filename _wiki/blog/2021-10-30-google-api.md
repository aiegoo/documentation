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
keywords: "apis request http apis application programming interface dialogflow google sdk google cloud gcp apis credentials REST postman gapi gsi sign in with google new version service account endpoint location detect intent roles tokens"
date: 2021-10-29
---

{% assign img-url = '/img/post/api' %}

Google's documentation is like an ocean. It's not easy to find a right one to start. This note contains only basic things that I've already worked with. Trying your own hand at Google's APIs will help you understand more.

👉 Note: [Google OAuth 2.0 with NodeJS](/google-oauth-2.0-nodejs/).
👉 Repo: [dinhanhthi/google-api-playground](https://github.com/dinhanhthi/google-api-playground) (private).

## Official documentation

<detail markdown="1">
<summary>click to open</summary>
<p>
<ol><li><p><a href="https://cloud.google.com/dialogflow/es/docs/reference">APIs &amp; references</a> -- the root of all things.</p><ol><li><a href="https://cloud.google.com/dialogflow/es/docs/reference/libraries/nodejs">Node.js client library</a> -- wanna use in a backend?<ol><li><a href="https://googleapis.dev/nodejs/dialogflow/latest/index.html">Dialogflow SDK Client Reference</a></li><li><a href="https://github.com/googleapis/nodejs-dialogflow">googleapis/nodejs-dialogflow</a> -- Github repo.<ol><li><a href="https://github.com/googleapis/nodejs-dialogflow#samples">Samples</a> -- wanna run these? Step to <a href="#run-samples">this section</a>.</li></ol></li></ol></li><li><a href="https://cloud.google.com/dialogflow/docs/reference/rest">REST APIs</a> -- wanna use <code>GET</code>, <code>POST</code>,...?</li></ol></li><li><p><a href="https://cloud.google.com/dialogflow/es/docs/reference/rest/v2-overview#service-endpoint">Service endpoint</a>.</p><div class="info"><p>💡 <strong>Tip</strong>: <code>us-dialogflow.googleapis.com</code> and <code>dialogflow.googleapis.com</code> are the same, so you can use <code>&lt;location&gt;-dialogflow.googleapis.com</code> in your codes.</p></div></li><li><p><a href="https://cloud.google.com/dialogflow/es/docs/how/region#regions">Available regions</a> (used in <code>locations</code>).</p><div class="info"><p>💡 <strong>Tip</strong>: <code>&lt;region&gt;-dialogflow.googleapis.com</code> = endpoint.</p></div></li><li><p><a href="https://github.com/google/google-api-javascript-client">google/google-api-javascript-client</a> -- aka <code>gapi</code>. Github repo.</p></li><li><p><a href="https://developers.google.com/apis-explorer/">Google APIs Explorer</a>.</p></li><li><p><a href="https://developers.google.com/oauthplayground/">OAuth 2.0 Playground</a>.</p></li><li><p><a href="https://cloud.google.com/iam/docs/understanding-roles?authuser=1&amp;_ga=2.35673635.-287242851.1634158283#dialogflow-roles">Understand roles</a> -- If you decide to create a service account, you will need to assign a role to some users/emails. Each role has different rights to use your data.</p></li></ol>
</p>
</detail>

## Wanna run the Node.js samples?{:#run-samples}

👉 Link of [all samples on github](https://github.com/googleapis/nodejs-dialogflow#samples).

{{site.data.alerts.warning}}
The old version uses [`dialogflow`](https://www.npmjs.com/package/dialogflow) and [`@type/dialogflow`](https://www.npmjs.com/package/@types/dialogflow). The new version uses only one [`@google-cloud/dialogflow`](https://www.npmjs.com/package/@google-cloud/dialogflow)!
{{site.data.alerts.end}}

<detail markdown="1">
<summary>steps</summary>
<p>
<pre>
1. Create a folder, eg. `/home/thi/df-samples/`
2. If you come from [Dialogflow Console](https://dialogflow.cloud.google.com/#/agents) > choose an agent > click on the gear next to the its name > Click on "Project ID" to open Google Cloud Platform Console.
3. If you come from GCP Console, it's the same.
4. Follow [these steps](https://cloud.google.com/storage/docs/reference/libraries#setting_up_authentication) to generate a JSON key (you'll download a JSON file). Store your JSON file in `df-samples/credential.json`. **Note down** the *project_id*, we will use it later, eg. `project_abc`.
5. Run each time you wanna test `export GOOGLE_APPLICATION_CREDENTIALS="/home/thi/df-samples/credential.json"` OR save this line to `/home/thi/.bashrc` or `/home/thi/.zshrc` (if you [use ZSH](/terminal/#zsh-linux)) and then refresh the current terminal (with this method, you don't need to run again previous line).

    ::: info
    **Alternative**: You don't have to use system variable `GOOGLE_APPLICATION_CREDENTIALS` if you don't want. In `credential.json`, copy `private_key` and `client_email` and then use them as,

    ```js
    const client = new AgentsClient({
        credentials: { private_key, client_email }
    });
    ```
    :::

6. Go to `/df-samples/` and run `npm i @google-cloud/dialogflow`.
7. Try this [quickstart.js](https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/quickstart.js).
8. On terminal, run

    ``` bash
    node quickstart.js project_abc
    ```

9.  Read carefully the content of each file in [samples](https://github.com/googleapis/nodejs-dialogflow/tree/main/samples), you have to put the corresponding inputs for the sample to work!
</pre>
</p>
</details>

----

<detail markdown="1">
<summary>try something outside 'samples'</summary>
<p>
In case you wanna try something outside the files given in [samples](https://github.com/googleapis/nodejs-dialogflow/tree/main/samples). Check [this SDK](https://googleapis.dev/nodejs/dialogflow/latest/index.html). Suppose we wanna try this one -- [`AgentsClient.searchAgents()`](https://googleapis.dev/nodejs/dialogflow/4.5.0/v2.AgentsClient.html#searchAgents)

1. Make the same things in "Step by step". At step 7, create `search-agents.js` with the same content as [`samples/set-agent.js`](https://github.com/googleapis/nodejs-dialogflow/blob/main/samples/set-agent.js). We are going to change this file.
2. Read the [reference](https://googleapis.dev/nodejs/dialogflow/4.5.0/v2.AgentsClient.html#searchAgents), change the input. Below is an example,

    ```js
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
    ```

    Then run `node search-agents.js`.

</p>
</details>

====
<detail markdown="1">
<summary>Different locations?</summary>
<p>
The example in "Try something outside..." gives us an example of using different regions. Below are some remarks:

1. On [DF console](https://dialogflow.cloud.google.com/), you can create some agents in a different regions, default is `global` (or `us`).
2. On the Google's documentations, they don't mention about the usage of location. If they say `parent = "projects/-"`, we shoud use `parent = "projects/-" + "/locations/" + location` where `location` can be [one of "Region ID"](https://cloud.google.com/dialogflow/es/docs/how/region#regions).
3. Change also the endpoint, option `apiEndpoint` in [`AgentsClient`'s constructor](https://googleapis.dev/nodejs/dialogflow/latest/v2.AgentsClient.html), for example.

    ```js
    const client = new AgentsClient({
        apiEndpoint: location + "-dialogflow.googleapis.com",
    });
    ```
</p>
</details>

## Wanna try `gapi` (JS client)?

{{site.data.alerts.danger}}
Google has announced that [they will be discontinuing the Google Sign-In JavaScript Platform Library for web](https://developers.googleblog.com/2021/08/gsi-jsweb-deprecation.html). You will have to switch to using *Google Identity Services* (or [Sign In With Google](https://developers.google.com/identity/gsi/web/guides/client-library) or `gsi`). The old service will be **completely discontinued on March 31, 2023**.

``` html
<!-- OLD -->
<script src="https://apis.google.com/js/platform.js" async defer></script>

<!-- NEW -->
<script src="https://accounts.google.com/gsi/client" async defer></script>
```
{{site.data.alerts.end}}

What's this `gapi`? You can use it completely inside an HTML file without using any backend.

👉 [List of samples](https://github.com/google/google-api-javascript-client/tree/master/samples).
👉 You have to use [REST API](https://cloud.google.com/dialogflow/es/docs/reference/rest) in this case.

{{site.data.alerts.info}}
💡 **Tip**: If you are using [VSCode](/visual-studio-code/), you can install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension to quickly create a server (port `5500` by default). Just click the button at the bottom right of the file and a website will appear.
{{site.data.alerts.end}}

<details markdown="1">
<summary>Steps</summary>
<p>
1. For setting up, follow [these steps](https://console.developers.google.com/apis/library).
2. After that, you should obtain an `API_KEY` and an `CLIENT_ID`.
3. First, try [this sample](https://github.com/google/google-api-javascript-client/blob/master/samples/authSample.html).
4. Using something like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and open `authSample.html`.
5. Make a test.
</p>
</details>

{{site.data.alerts.warning}}
- Make sure you create the "OAuth consent screen" before you create "OAuth 2.0 Client IDs". The "consent screen" is the popup window that contains all the information about the scopes your app will ask users for permission.
- Make sure you add `http://localhost:5500` (which is created in step 4) to "Authorized JavaScript origins" and "Authorized redirect URIs". You may have to wait a few "ten minutes" for everything to work. Without this step, you may encounter the error `mismatch_uri`.
{{site.data.alerts.end}}

## The corresponding between REST API and Node.js clients

👉 [REST API](https://cloud.google.com/dialogflow/docs/reference/rest/v2-overview).
👉 [Node.js SDK](https://googleapis.dev/nodejs/dialogflow/latest/index.html).

<details markdown="1">
<summary>Examples</summary>
<p>
`projects.agent.search`

- `GET https://{endpoint}/v2/{parent=projects/*}/agent:search`
- **REST**: [.../v2/projects.agent/search](https://cloud.google.com/dialogflow/es/docs/reference/rest/v2/projects.agent/search)
- **SDK**: [.../v2.AgentsClient.html#searchAgents](https://googleapis.dev/nodejs/dialogflow/latest/v2.AgentsClient.html#searchAgents)

`projects.agent.sessions.detectIntent`

- `POST https://{endpoint}/v2/{session=projects/*/locations/*/agent/sessions/*}:detectIntent`
- **REST**: [.../v2/projects.agent.sessions/detectIntent](https://cloud.google.com/dialogflow/es/docs/reference/rest/v2/projects.agent.sessions/detectIntent)
- **SDK**: [.../v2.SessionsClient.html#detectIntent](https://googleapis.dev/nodejs/dialogflow/latest/v2.SessionsClient.html#detectIntent)
</p>
</details>


## Dialogflow REST APIs with Postman

👉 [Check this official guide](https://github.com/GoogleCloudPlatform/dialogflow-integrations/blob/master/dialogflow-api-quick-start/postman/README.md).

<details markdown="1">
<summary>Additional configurations</summary>
<p>
- Create a collection and add the Authorization for this collection. All of its request will use the same auth method.
- Create variables (on tab "Variables") to store "CLIENT ID" (`client_id`) and "CLIENT SECRET" (as `client_secret`), then use them in the form by `{% raw %}{{client_id}}{% endraw %}` and `{% raw %}{{client_secret}}{% endraw %}`.
</p>
</details>

{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
