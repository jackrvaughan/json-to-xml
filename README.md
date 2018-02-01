# json-to-xml
Converts javascript objects / JSON to an xml string

Modified VERY SLIGHTLY from http://raathigesh.com/Converting-Json-Object-To-XML-String-In-JavaScript/

Raathigeshan's version works perfectly, but I had a requirement to convert to an xml format that could not be achieved with his conversion, because it required array-like objects where multiple properties had the same name. Here is an example:

```json
{
  "body":{
    "array":{
      "entry":{
        "data":"string_1"
      },
      "entry":{
        "data":"string_2"
      },
      "entry":{
        "data":"string_3"
      }
    }
  }
}
```

This does not work because an object cannot have multiple properties with the same name. So I tried this:

```json
{
  "body":{
    "array":[
      {
        "data":"string_1"
      },
      {
        "data":"string_2"
      },
      {
        "data":"string_3"
      }
    ]
  }
}
```
Ussing an actual array would not work either because I needed the xml to include the entry property name tag surrounding the data tags. So I built the json structure like this (adding a number flanked by two underscores to each entry):

```json
{
  "body":{
    "array":{
      "entry_1_":{
        "data":"string_1"
      },
      "entry_2_":{
        "data":"string_2"
      },
      "entry_3_":{
        "data":"string_3"
      }
    }
  }
}
```
With the regex replace method I was able to remove all the numbers (`_1_`,`_2_`,`_3_`) from the xml string after the loop had been complete. So my output looks like this:

```xml
<body>
    <array>
        <entry>
            <data>"string_1"</data>
        </entry>
        <entry>
            <data>"string_2"</data>
        </entry>
        <entry>
            <data>"string_3"</data>
        </entry>
    </array>
</body>
```

This doesn't seem to be the most elegant solution because you wouldn't typically have json formatted in the way required for this conversion to work - but for my use case it served its purpose.
