# Demo

---

## Normal usage

````html
<script>
var start = new Date().getTime();
</script>
<script type="text/javascript" src="/index.js"></script>
<script type="text/javascript" src="/sea-modules/jquery/1.7.2/jquery.js"></script>
````

````javascript
var useTime = new Date().getTime();

seajs.use(['jquery', 'index'], function($, ready) {
  var usedStart = new Date().getTime();

  var output = $("#output");

  output.append('<tr><th>readyState</th><td colspan="2">' + document.readyState + '</td></tr>');
  output.append('<tr><th>seajs.use</th>' +
    '<td>' + (usedStart - start) + 'ms</td>' +
    '<td>' + (usedStart - useTime) + 'ms</td></tr>');

  ready(function(){
    var time = new Date().getTime();
    output.append('<tr><th>ready</th>' +
      '<td>' + (time - start) + 'ms</td>' +
      '<td>' + (time - usedStart) + 'ms</td></tr>');
  });
  $(function(){
    var time = new Date().getTime();
    output.append('<tr><th>jQuery.ready</th>' +
      '<td>' + (time - start) + 'ms</td>' +
      '<td>' + (time - usedStart) + 'ms</td></tr>');
  });
});
````

![sai](https://saijs.github.io/sai.js/resources/sai.png)


<style>
table.table {
  width: 99%;
  border: 1px solid #ccc;
  table-layout: none;
}
table.table th,
table.table td {
  border: 1px solid #ccc;
  padding: 5px 10px;
}
table.table thead th {
  background: #eee;
}
table.table tbody th {
  background: #f8f8f8;
}
</style>
<div>
  <table class="table">
    <thead>
      <tr>
        <th>TYPE</th><th>READY TIME</th><th>READY AFTER USE TIME</th>
      </tr>
    </thead>
    <tbody id="output">
    </tbody>
  </table>
</div>
