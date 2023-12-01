function load(loader::DataLoader{:arrow}, file::IO, sink::Type)
    @import Arrow
    convert::Bool = @getparam loader."convert"::Bool true
    result = Arrow.Table(file; convert) |>
    if sink == Any || sink == Arrow.Table
        identity
    elseif QualifiedType(sink) == QualifiedType(:DataFrames, :DataFrame)
        sink
    end
    result
end

function save(writer::DataWriter{:arrow}, file::IO, tbl)
    @import Arrow
    compress::Union{Symbol, Nothing} = @getparam loader."compress"::Union{Symbol, Nothing} nothing
    alignment::Int = @getparam loader."alignment"::Int 8
    dictencode::Bool = @getparam loader."dictencode"::Bool false
    dictencodenested::Bool = @getparam loader."dictencodenested"::Bool false
    denseunions::Bool = @getparam loader."denseunions"::Bool true
    largelists::Bool = @getparam loader."largelists"::Bool false
    maxdepth::Int = @getparam loader."maxdepth"::Int 6
    ntasks::Int = @getparam loader."ntasks"::Int typemax(Int32)
    Arrow.write(
        file, tbl;
        compress, alignment,
        dictencode, dictencodenested,
        denseunions, largelists,
        maxdepth, ntasks
    )
end

supportedtypes(::Type{DataLoader{:arrow}}) =
    [QualifiedType(:DataFrames, :DataFrame)]

create(::Type{DataLoader{:arrow}}, source::String) =
    !isnothing(match(r"\.arrow$"i, source))

createpriority(::Type{DataLoader{:arrow}}) = 10

const ARROW_DOC = md"""
Parse and serialize arrow files

# Input/output

The `arrow` driver expects data to be provided via `IO`.

By default this driver supports parsing to three data types:
- `DataFrame`
- `Arrow.Table`

# Required packages

+ `Arrow`

# Parameters

- `convert`: controls whether certain arrow primitive types will be converted to more friendly Julia defaults

# Usage examples

```toml
[[iris.loader]]
driver = "arrow"
```
"""
