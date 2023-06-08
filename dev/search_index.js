var documenterSearchIndex = {"docs":
[{"location":"loaders/xlsx/#XLSX","page":"XLSX","title":"XLSX","text":"","category":"section"},{"location":"loaders/xlsx/","page":"XLSX","title":"XLSX","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:xlsx)","category":"page"},{"location":"storage/web/#Web","page":"Web","title":"Web","text":"","category":"section"},{"location":"storage/web/","page":"Web","title":"Web","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:web)","category":"page"},{"location":"loaders/json/#JSON","page":"JSON","title":"JSON","text":"","category":"section"},{"location":"loaders/json/","page":"JSON","title":"JSON","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:json)","category":"page"},{"location":"plugins/memorise/#Memorise","page":"Memorise","title":"Memorise","text":"","category":"section"},{"location":"plugins/memorise/","page":"Memorise","title":"Memorise","text":"Main.DataToolkitCommon.DataToolkitBase.plugin_info(\"memorise\")","category":"page"},{"location":"plugins/versions/#Versions","page":"Versions","title":"Versions","text":"","category":"section"},{"location":"plugins/versions/","page":"Versions","title":"Versions","text":"Main.DataToolkitCommon.DataToolkitBase.plugin_info(\"versions\")","category":"page"},{"location":"storage/filesystem/#Filesystem","page":"Filesystem","title":"Filesystem","text":"","category":"section"},{"location":"storage/filesystem/","page":"Filesystem","title":"Filesystem","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:filesystem)","category":"page"},{"location":"storage/passthrough/#Passthrough","page":"Passthrough","title":"Passthrough","text":"","category":"section"},{"location":"storage/passthrough/","page":"Passthrough","title":"Passthrough","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:passthrough, :storage)","category":"page"},{"location":"loaders/csv/#CSV","page":"CSV","title":"CSV","text":"","category":"section"},{"location":"loaders/csv/","page":"CSV","title":"CSV","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:csv)","category":"page"},{"location":"plugins/log/#Log","page":"Log","title":"Log","text":"","category":"section"},{"location":"plugins/log/","page":"Log","title":"Log","text":"Main.DataToolkitCommon.DataToolkitBase.plugin_info(\"log\")","category":"page"},{"location":"plugins/cache/#Cache","page":"Cache","title":"Cache","text":"","category":"section"},{"location":"plugins/cache/","page":"Cache","title":"Cache","text":"Main.DataToolkitCommon.DataToolkitBase.plugin_info(\"cache\")","category":"page"},{"location":"storage/null/#Null","page":"Null","title":"Null","text":"","category":"section"},{"location":"storage/null/","page":"Null","title":"Null","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:null)","category":"page"},{"location":"loaders/delim/#Delim","page":"Delim","title":"Delim","text":"","category":"section"},{"location":"loaders/delim/","page":"Delim","title":"Delim","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:delim)","category":"page"},{"location":"storage/raw/#Raw","page":"Raw","title":"Raw","text":"","category":"section"},{"location":"storage/raw/","page":"Raw","title":"Raw","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:raw)","category":"page"},{"location":"plugins/defaults/#Defaults","page":"Defaults","title":"Defaults","text":"","category":"section"},{"location":"plugins/defaults/","page":"Defaults","title":"Defaults","text":"Main.DataToolkitCommon.DataToolkitBase.plugin_info(\"defaults\")","category":"page"},{"location":"loaders/zip/#Zip","page":"Zip","title":"Zip","text":"","category":"section"},{"location":"loaders/zip/","page":"Zip","title":"Zip","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:zip)","category":"page"},{"location":"loaders/compression/#Compression","page":"Compression","title":"Compression","text":"","category":"section"},{"location":"loaders/compression/","page":"Compression","title":"Compression","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:gzip)","category":"page"},{"location":"plugins/store/#Store","page":"Store","title":"Store","text":"","category":"section"},{"location":"plugins/store/","page":"Store","title":"Store","text":"Main.DataToolkitCommon.DataToolkitBase.plugin_info(\"store\")","category":"page"},{"location":"loaders/iotofile/#IO-to-File","page":"IO to File","title":"IO to File","text":"","category":"section"},{"location":"loaders/iotofile/","page":"IO to File","title":"IO to File","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:iotofile)","category":"page"},{"location":"loaders/chain/#Chain","page":"Chain","title":"Chain","text":"","category":"section"},{"location":"loaders/chain/","page":"Chain","title":"Chain","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:chain)","category":"page"},{"location":"loaders/passthrough/#Passthrough","page":"Passthrough","title":"Passthrough","text":"","category":"section"},{"location":"loaders/passthrough/","page":"Passthrough","title":"Passthrough","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:passthrough, :loader)","category":"page"},{"location":"repl/#REPL","page":"REPL","title":"REPL","text":"","category":"section"},{"location":"repl/","page":"REPL","title":"REPL","text":"All of the relevant help for the REPL can be accessed from inside the REPL. They are repeated here verbatim.","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"using Markdown\nCore.eval(Main, quote\n              function datarepl(cmd)\n                  Markdown = $Markdown\n                  pipe = Pipe()\n                  started = Base.Event()\n                  writer = @async redirect_stdio(stdout=pipe, stderr=pipe) do\n                      notify(started)\n                      DataToolkitCommon.DataToolkitBase.execute_repl_cmd(cmd)\n                      close(Base.pipe_writer(pipe))\n                  end\n                  wait(started)\n                  result = read(pipe, String)\n                  wait(writer)\n                  Markdown.MD([\n                      Markdown.Header{3}([Markdown.Code(\"$cmd\")]),\n                      Markdown.Code(\"ansi\", replace(result, r\"\\e\\[\\d+m\" => \"\"))])\n              end\n          end)\nnothing","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"help\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?add\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?config\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?check\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?config get\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?config set\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?config unset\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?delete\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?edit\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?init\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?list\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?make\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?plugin\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?plugin add\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?plugin remove\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?plugin edit\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?plugin info\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?plugin list\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?search\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?show\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?stack\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?stack promote\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?stack demote\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?stack load\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?stack remove\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?store\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?store config\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?store expunge\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?store gc\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?store stats\")","category":"page"},{"location":"repl/","page":"REPL","title":"REPL","text":"Main.datarepl(\"?help\")","category":"page"},{"location":"loaders/julia/#Julia","page":"Julia","title":"Julia","text":"","category":"section"},{"location":"loaders/julia/","page":"Julia","title":"Julia","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:julia)","category":"page"},{"location":"loaders/sqlite/#SQLite","page":"SQLite","title":"SQLite","text":"","category":"section"},{"location":"loaders/sqlite/","page":"SQLite","title":"SQLite","text":"Main.DataToolkitCommon.DataToolkitBase.transformer_docs(:sqlite)","category":"page"},{"location":"#Introduction","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"DataToolkitCommon takes the skeleton provided by DataToolkitBase and builds the basic functionality needed to make DataToolkit actually useful.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"To gain an understanding of how these two components fit together, it is recommended the DataToolkitBase docs be looked at first to understand the system, and then these docs for useful transformers and plugins to actually work with your data.","category":"page"}]
}
