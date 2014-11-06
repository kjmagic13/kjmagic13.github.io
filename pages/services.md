---
layout: page-sidebar
title: Services
permalink: /services/
sidebar: widget-contact.html
---

<div class="media">
	<span class="media-left" href="#">
		<img src="/images/logo-jekyll.png" width="96">
	</span>
	<div class="media-body">
		<h3 class="media-heading">Jekyll <em>simple blogging, minimal edits, & limited back-end coding.</em></h3>
		<p>
			<a href="#get-started" class="btn btn-primary" data-toggle="modal" data-target="#getStartedModal"><i class="fa fa-fw fa-github-alt"></i> Get started!</a>
		</p>
	</div>
</div>

<div class="media">
	<span class="media-left" href="#">
		<i class="fa fa-wordpress fa-5x fa-fw"></i>
	</span>
	<div class="media-body">
		<h3 class="media-heading">WordPress <em>complex blogging, heavy edits, & unrestricted back-end coding.</em></h3>
		<p>
			<a href="#get-started" class="btn btn-primary" data-toggle="modal" data-target="#getStartedModal"><i class="fa fa-fw fa-wordpress"></i> Get started!</a>
		</p>
	</div>
</div>

<div class="media">
	<span class="media-left" href="#">
		<img src="/images/logo-rails.png" width="96">
	</span>
	<div class="media-body">
		<h3 class="media-heading">Ruby on Rails <em>for those who mean business.</em></h3>
		<p>
			<a href="#get-started" class="btn btn-primary" data-toggle="modal" data-target="#getStartedModal"><i class="fa fa-fw fa-bolt"></i> Get started!</a>
		</p>
	</div>
</div>

<hr>

<div class="media">
	<span class="media-left" href="#">
		<i class="fa fa-cloud fa-5x fa-fw"></i>
	</span>
	<div class="media-body">
		<h3 class="media-heading">Hosting & Virtual Private Servers</h3>
		<p>
			<a href="#get-started" class="btn btn-primary" data-toggle="modal" data-target="#getStartedModal"><i class="fa fa-fw fa-cloud"></i> Get started!</a>
		</p>
	</div>
</div>

<div class="media">
	<span class="media-left" href="#">
		<i class="fa fa-sitemap fa-5x fa-fw"></i>
	</span>
	<div class="media-body">
		<h3 class="media-heading">Computer & Network Consultations</h3>
		<p>
			<a href="#get-started" class="btn btn-primary" data-toggle="modal" data-target="#getStartedModal"><i class="fa fa-fw fa-sitemap"></i> Get started!</a>
		</p>
	</div>
</div>

<hr>

<div class="media">
	<span class="media-left" href="#">
		<i class="fa fa-camera fa-5x fa-fw"></i>
	</span>
	<div class="media-body">
		<h3 class="media-heading">Digital Mulimedia</h3>
		<p>
			<a href="#get-started" class="btn btn-primary" data-toggle="modal" data-target="#getStartedModal"><i class="fa fa-fw fa-camera"></i> Get started!</a>
		</p>
	</div>
</div>

<div class="modal fade" id="getStartedModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
				<h4 class="modal-title" id="myModalLabel">Coming Soon!</h4>
			</div>
		</div>
	</div>
</div>



<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<form>
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
					<h4 class="modal-title" id="myModalLabel">Let's Go!</h4>
				</div>
				<div class="modal-body">

					<fieldset>
						<div class="form-group">
							<label for="inputEmail" class="col-lg-2 control-label">Email</label>
							<div class="col-lg-10">
								<input type="text" class="form-control" id="inputEmail" placeholder="Email">
							</div>
						</div>
						<div class="form-group">
							<label for="inputPassword" class="col-lg-2 control-label">Password</label>
							<div class="col-lg-10">
								<input type="password" class="form-control" id="inputPassword" placeholder="Password">
								<div class="checkbox">
									<label>
										<input type="checkbox"> Checkbox
									</label>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="textArea" class="col-lg-2 control-label">Textarea</label>
							<div class="col-lg-10">
								<textarea class="form-control" rows="3" id="textArea"></textarea>
								<span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
							</div>
						</div>
						<div class="form-group">
							<label class="col-lg-2 control-label">Radios</label>
							<div class="col-lg-10">
								<div class="radio">
									<label>
										<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
										Option one is this
									</label>
								</div>
								<div class="radio">
									<label>
										<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
										Option two can be something else
									</label>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label for="select" class="col-lg-2 control-label">Selects</label>
							<div class="col-lg-10">
								<select class="form-control" id="select">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
								<br>
								<select multiple="" class="form-control">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
							</div>
						</div>
					</fieldset>

				</div>
				<div class="modal-footer">
					<button class="btn btn-default" data-dismiss="modal">Cancel</button>
					<button type="submit" class="btn btn-primary"><i class="fa fa-thumb-tack"></i> Submit</button>
				</div>
			</form>
		</div>
	</div>
</div>