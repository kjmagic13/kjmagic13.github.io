---
layout:			portfolio
title:			"salonTREND"
link:				salontrendvestal.com
link_url:		http://salontrendvestal.com
date:				2014-10-27 09:54:50
tags:				twitter bootstrap
---

<img src="/images/portfolio-salontrend.png" class="img-responsive img-thumbnail img-portfolio" title="{{page.title}}" alt="{{page.title}} screenshot" align="right">
The salonTREND website was developed using a custom built WordPress theme that utilizes the Twitter Bootstrap 3 framwork.

Notable features include:
<ul>
	<li>Twitter Bootstrap shortcodes</li>
	<li>Parallax background images</li>
	<li>Responsive single page layout</li>
</ul>

A Shortcode class was created to easily add and maintain WordPress shortcodes that will be used throughout the website. Examples of the Twitter Bootstrap shortcodes mentioned previously are `[row]`, `[column]`, and `[alert]`.

{% highlight php %}
class ThemeShortcodes
{
	function __construct()
	{
		foreach ( get_class_methods(__CLASS__) as $key => $method ) {
			if ( $method == '__construct' ) { continue; }
			add_shortcode( $method, array($this, $method) );
		}
	}

	// all functions in this class will be available as a shortcode (ex. [shortcode])
	//function shortcode()
	//{
	//		//shortcode logic
	//}
}
{% endhighlight %}
