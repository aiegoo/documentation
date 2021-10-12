---
layout: post
title: Tag
permalink: tag-home.html
public: true
---

## tag-home
<div class="well">
<h6>이곳에 보이는 태그는 <a href="https://stackoverflow.com/tags?tab=popular">stackoverflow tag 페이지</a> 에서 인기도가 높은 태그를 우선으로 선정했습니다.</h6>
{% assign tagMap = site.html_pages %}
{% assign tagList = site.data.tags.allowed-tags %}
<div>
    <ul class="tag-list">
{% for tag in tagList %}
        <li>
            <a href="#{{tag}}" onclick="showTag('#{{tag}}')">
                {{tag}}<sup>{{ tagMap[tag] | size }}</sup>
            </a>
        </li>
{% endfor %}
    </ul>
</div>
<div class="post-meta post-nav">
{% for tag in tagList %}
    <div class="archive-group invisible" id="{{tag}}">
        <h3 id="{{tag}}">#{{ tag }}</h3>
        <ul class="post-list leaders">
    {% assign list = tagMap[loc] | remove: 'aiegoo.github.io/'  %}
    {% for postObj in list %}
        {% assign post = tagMap[postObj.loc] %}
        {% if post.public != false %}
            <li>
                <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
                    <span>{{ post.title }}</span>
                    <div class="post-meta" style="float: right;">
                        {{ post.updated | date: "%Y.%m.%d" }}
                    </div>
            {% if post.summary != empty and post.summary != undefined %}
                        <div class="post-excerpt">
                            - {{ post.summary }}
                        </div>
            {% endif %}
                </a>
            </li>
        {% endif %}
    {% endfor %}
        </ul>
<h3 id="stackoverflow">Checking ... "#{{ tag }}" in StackOverflow</h3>
    </div> <!-- end of archive-group -->
{% endfor %}
</div>
</div> <!-- end of well -->

<script src="js/axios.min.js"></script>
<script src="js/taginstackoverflow.js"></script>
<script>
    function showTag(selector) {
        document.querySelectorAll('.visible')
            .forEach(function(el) {
                el.classList.remove('visible');
                el.classList.add('invisible');
            })
        var list = document.querySelector(selector);
        list.classList.add('visible');
        list.classList.remove('invisible');
        const onlyTagString = selector.slice(1)
        document.dispatchEvent(new CustomEvent('showtag', { detail: onlyTagString }));
    }
    ;(function showInitTag() {
        const url = window.location.href;
        const req = /#([^\s]+)$/.exec(url);
        if(Array.isArray(req)) {
            var selector = '#' + decodeURI(req.pop());
            showTag(selector);
        }
    })();
</script>
