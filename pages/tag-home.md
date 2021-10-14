---
layout: post
title: Tag
permalink: tag-home.html
public: true
toc: false
---

## tag-home
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
    <h6>이곳에 보이는 태그는 <a href="https://stackoverflow.com/tags?tab=popular">stackoverflow tag 페이지</a> 에서 인기도가 높은 태그를 우선으로 선정했습니다.</h6>
    {% assign tagMap = site.pages %}
    {% assign tagList = site.data.tags.allowed-tags | sort_natural %}
    <div>
        <ul class="tag-list" style="line-height: 1.1;">
    {% for tag in tagList | sort_natural %}
            <li>
                <a href="#{{tag}}" onclick="showTag('#{{tag}}')">
                    {{tag}}<sup style="color: hotpink;">{{ tag | size }}</sup>
                </a>
            </li>
    {% endfor %}
        </ul>
    </div>
    <hr class="faded">
    <div class="post-meta">
    {% for tag in tagList %}
        <div class="archive-group invisible" id="{{tag}}">
            <h3 id="{{tag}}">#{{ tag }}</h3>
            <ul class="post-list leaders">
        {% assign thisTag = tag %}
        {% capture tagMap %}{{ tagList | strip_newlines }}{% endcapture %}
            {% for post in site.pages %}
                {% if post.tags contains  tag %}
                <li>
                    <a class="post-link" href="{{ tag | prepend: site.baseurl }}">
                        <span>{% if post.title %} {{post.title}} {% else %} {{ post.name }} {% endif %}</span>
                        <div class="post-meta" style="color: red;">
                        <span class="parameter red"> {{ post.updated | date: "%Y.%m.%d" }}</span>
                        </div>
                    {% if post.summary != empty %}
                            <div class="post-excerpt">
                                - {{ post.summary }}
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
