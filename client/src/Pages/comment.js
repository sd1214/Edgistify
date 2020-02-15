<% include ../partials/header %>
<div class="container">
    <div class="row">
        <h1 style="text-align: center">Add New Comment to <%= item.name%></h1>
        <div style="width: 30%; margin: 25px auto;">
            <form action="/items/<%= item._id %>/comments" method="POST">
                <div class="form-group">
                    <input class="form-control" type="text" name="comment[text]" placeholder="text">
                </div>
                <div class="form-group">
                    <button class="btn btn-lg btn-primary btn-block">Submit!</button>
                </div>
            </form>
            <a href="/items">Go Back</a>
        </div>
    </div>
</div>
<% include ../partials/footer %></div>