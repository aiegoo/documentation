---
layout: post
title: Tag cloud
permalink: tag.html
public: true
toc: false
sidebar: other_sidebar
---

<div class="well">
<style type="text/css">
.col-md-6 {
    width: 70% !important;
}
@media only screen and (max-width:767px){
    .col-md-6 {
        width: 100% !important;
    }
}
</style>
    <h6><a href="https://stackoverflow.com/tags?tab=popular">stackoverflow tag 페이지</a> 에서 인기도가 높은 결과를 검색 할 수 있습니다.</h6>
    {% assign tagMap = site.pages %}
    {% assign tagList = site.data.tags.allowed-tags | sort_natural %}
    {% assign counter = '0' %}
    <div>
        <ul class="tag-list" style="line-height: 1.1;">
    {% for tag in tagList | sort_natural %}
            <li>
                <a href="#{{tag[0]}}" onclick="showTag('#{{tag}}')" style="font-size: {% capture postCounter %}{% for post in site.pages | sort_natural %}{% if post.tags contains  tag %}{{ counter | plus: 1 | length }}{% endif %}{% endfor %}{% endcapture %}{{ postCounter | size | times: 6 | plus: 90 }}% !important;">
                    {{tag}}<sup style="color: hotpink;">{{ postCounter | size }}</sup>
                </a>
            </li>
    {% endfor %}
        </ul>
    </div>
    <hr class="faded">
    <div class="post-meta">   
    
    {% capture tags %}
        {% for tag in site.tags %}
        {{ tag[0] }}#{{ tag[1].size}}
        {% endfor %}
    {% endcapture %}
    {% assign sortedTags = tags | split:' ' | sort %} 
    {% for tag in tagList %}
        <div class="archive-group invisible" id="{{tag}}">
            <h3 id="{{tag}}">#{{ tag }}<i class="badge">{% capture postCounter %}{% for post in site.pages | reverse %}{% if post.tags contains  tag %}{{ counter | plus: 1 | length }}{% endif %}{% endfor %}{% endcapture %} {{ postCounter | size }}</i>               
            </h3>
            <ul class="post-list leaders">
        {% assign thisTag = tag %}
        {% capture tagMap %}{{ tagList | strip_newlines }}{% endcapture %}
            {% for post in site.pages %}
                {% if post.tags contains  tag %}
                <li>
                    <a class="post-link leaguegothic" href="{{ post.url | prepend: site.baseurl }}">
                        <span>{% if post.title %} {{post.title}} {% else %} {{ post.name | remove: ".md" }} {% endif %}</span>
                        <span class="post-meta red" style="color: red;"> {{ post.updated | date: "%Y.%m.%d" }}</span>
                    {% if post.summary != empty %}
                            <div class="post-meta tag-home">
                               📫  - {{ post.summary }}
                            </div>
                    {% else %}
                            <div class="post-meta tag-home">
                              <i class="fa fa-github" aria-hidden="true"></i>  - {{ post.excerpt }}
                            </div>
                    {% endif %}
                    </a>
                </li> 
                {% endif %}
            {% endfor %}
            </ul>
    <h3 id="stackoverflow">Checking ... "{{ tag }}" in StackOverflow</h3>
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
