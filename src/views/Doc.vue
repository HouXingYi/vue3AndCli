
<template>
  <div>
    <el-button type="primary" :style="{marginTop: '20px'}" @click="renderDoc">
      Render docx template
    </el-button>
  </div>
</template>

<script>
import Docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'
import PizZipUtils from 'pizzip/utils/index.js'
import { saveAs } from 'file-saver'
// import JSZipUtils from 'jszip-utils'

// function loadFile (url, callback) {
//   PizZipUtils.getBinaryContent(url, callback)
// }

export default {
  methods: {
    renderDoc () {
      PizZipUtils.getBinaryContent('/tag-example.docx', function (
        error,
        content
      ) {
        if (error) {
          throw error
        }
        var zip = new PizZip(content)
        var doc = new Docxtemplater(zip)
        doc.setData({
          first_name: 'John',
          last_name: 'Doe',
          phone: '0652455478',
          description: 'New Website',
          image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QIJBywfp3IOswAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAkUlEQVQY052PMQqDQBREZ1f/d1kUm3SxkeAF/FdIjpOcw2vpKcRWCwsRPMFPsaIQSIoMr5pXDGNUFd9j8TOn7kRW71fvO5HTq6qqtnWtzh20IqE3YXtL0zyKwAROQLQ5l/c9gHjfKK6wMZjADE6s49Dver4/smEAc2CuqgwAYI5jU9NcxhHEy60sni986H9+vwG1yDHfK1jitgAAAABJRU5ErkJggg==',
          html: `<h1>docxtemplater</h1>
            <p><strong>docxtemplater</strong> is a library to generate docx/pptx
            documents from a docx/pptx template. It can replace {placeholders}
            with data and also supports loops and conditions. The templates can be
            edited by non-programmers, eg for example your clients.</p>
            <p>Installation: <code>npm install docxtemplater</code></p>
            <p>If you download the JS from there, you should use <code>new
            Docxgen()</code> instead of <code>new Docxtemplater()</code>, because
            I do not want to bring in a breaking change on a minor version change
            in the docxtemplater-build repository.</p>
            <p>If you download the JS from there, you should use <code>new
            Docxgen()</code> instead of <code>new Docxtemplater()</code>, because
            I do not want to bring in a breaking change on a minor version change
            in the docxtemplater-build repository.</p>
            <p>I recommend you to use the npm scripts I wrote (which can be found
                in the package.json).</p>
            <code> npm install && npm run compile </code>
            <p>Your version of docxtemplater will be in /build (minified and non
                minified options) and already include all dependencies</p>
            <p>Create the following html</p>
            <h2>Similar libraries</h2>
            <p>There are a few similar libraries that work with docx, here’s a list
            of those I know a bit about:</p>
            <h1>Modules</h1>
            <p>Functionality can be added with modules. They is yet no doc for the
            modules because it is not completely mature yet, but you can open an
            issue if you have any question about it.</p>
            <p>Here is the list of existing modules:</p>
            <h1>Professional Support</h1>
            <p>I can give your company support for installing, extending,
            answering support questions, or maintainning your app that runs
            docxtemplater. You can find my email address on my </p>
            `
        })

        // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
        function replaceErrors (key, value) {
          if (value instanceof Error) {
            return Object.getOwnPropertyNames(value).reduce(function (
              error,
              key
            ) {
              error[key] = value[key]
              return error
            },
            {})
          }
          return value
        }

        try {
          // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
          doc.render()
        } catch (error) {
          console.log(JSON.stringify({ error: error }, replaceErrors))

          if (error.properties && error.properties.errors instanceof Array) {
            const errorMessages = error.properties.errors
              .map(function (error) {
                return error.properties.explanation
              })
              .join('\n')
            console.log('errorMessages', errorMessages)
            // errorMessages is a humanly readable message looking like this :
            // 'The tag beginning with "foobar" is unopened'
          }
          throw error
        }
        var out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        }) // Output the document using Data-URI
        saveAs(out, 'output.docx')
      })
    }
  }
}

</script>
