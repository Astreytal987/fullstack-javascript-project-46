const stylishResult = `{
    common: {
      - follow: false
        setting1: Value 1
      + setting2: 200
      - setting3: null
      + setting3: true
      - setting4: blah blah
      - setting5: {
            key5: value5
        }
    }
    group1: {
      - baz: bars
      + baz: bas
      - foo: bar
      + foo: baran
      - nest: str
      + nest: {
            key: value
        }
    }
  + group2: {
        abcd: 12345
        deep: {
            id: 45
            color: red
        }
    }
  - group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;
export default stylishResult;
