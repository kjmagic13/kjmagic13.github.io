---
layout: page-sidebar
title: Portfolio
permalink: /portfolio/
sidebar: widget-contact.html
---

<ul class="media-list">
	{% for post in site.posts %}

	<li class="media">
		{% if post.image %}
		<a class="media-left" href="{{ post.url | prepend: site.baseurl }}">
			<img class="img-portfolio-thumb" src="/images/{{ post.image }}" alt="{{post.title}} screenshot">
		</a>
		{% endif %}
		<div class="media-body">
			<h4 class="media-heading">
				<a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
				<small>{{ post.date | date: "%b %-d, %Y" }}</small>
			</h4>
			{{ post.excerpt }}
		</div>
	</li>

	{% endfor %}
</ul>

<p class="text-right">
	<a href="{{ "/feed.xml" | prepend: site.baseurl }}" class="btn btn-xs btn-warning" title="subscribe via RSS">
		<i class="fa fa-rss"> Subscribe</i>
	</a>
</p>
