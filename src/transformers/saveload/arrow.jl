function load(loader::DataLoader{:arrow}, io::IO, sink::Type)
    @import Arrow
    convert::Bool = @getparam loader."convert"::Bool true
    result = Arrow.Table(io; convert) |>
    if sink == Any || sink == Arrow.Table
        identity
    elseif QualifiedType(sink) == QualifiedType(:DataFrames, :DataFrame)
        sink
    end
    result
end

function save(writer::DataWriter{:arrow}, io::IO, tbl)
    @import Arrow
    compress = @getparam loader."compress"::Union{Symbol, Nothing} nothing
    alignment = @getparam loader."alignment"::Int 8
    dictencode = @getparam loader."dictencode"::Bool false
    dictencodenested = @getparam loader."dictencodenested"::Bool false
    denseunions = @getparam loader."denseunions"::Bool true
    largelists = @getparam loader."largelists"::Bool false
    maxdepth = @getparam loader."maxdepth"::Int 6
    ntasks = @getparam loader."ntasks"::Int typemax(Int32)
    Arrow.write(
        io, tbl;
        compress, alignment,
        dictencode, dictencodenested,
        denseunions, largelists,
        maxdepth, ntasks
    )
end

supportedtypes(::Type{DataLoader{:arrow}}) =
    [QualifiedType(:DataFrames, :DataFrame),
     QualifiedType(:Arrow, :Table)]

create(::Type{DataLoader{:arrow}}, source::String) =
    !isnothing(match(r"\.arrow$"i, source))

createpriority(::Type{DataLoader{:arrow}}) = 10

const ARROW_DOC = md"""
Parse and serialize arrow files

# Input/output

The `arrow` driver expects data to be provided via `IO`.

By default this driver supports parsing to two data types:
- `DataFrame`
- `Arrow.Table`

# Required packages

+ `Arrow`

# Parameters

- `convert`: controls whether certain arrow primitive types will be converted to more friendly Julia defaults
- The writer mirrors the arguments available in `Arrow.write`.

# Usage examples

```toml
[[iris.loader]]
driver = "arrow"
```
"""
