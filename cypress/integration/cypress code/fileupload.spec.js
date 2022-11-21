///<reference types = "cypress"/>

describe('fileupload in cypress', function () {
   it('verify the fileupload', function () {
      cy.visit('http://automationpractice.com/index.php?controller=contact')
      let myfile = 'tarangan.xlsx'
      cy.get('#fileUpload').attachFile(myfile)
      cy.get('.filename').should('contain', myfile)
   })

   it('verify the file upload drag and drop', function () {
      cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
      let myfile = 'download.jpg'
      cy.get('#file').attachFile(myfile)
      cy.get('.box__success').should('contain', 'Done')
   })

   it('verify the file upload drag and drop for error', function () {
      cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
      let myfile = 'tarangan.xlsx'
      cy.get('#file').attachFile(myfile)
      cy.get('.box__error').should('contain', 'Only images are allowed')
   })

   it('verify the multiple file upload', function () {
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
      let myfile = 'tarangan.xlsx'
      let myfile1 = 'download.jpg'
      let myfile2 = 'example.json'
      cy.get('#filesToUpload').attachFile([myfile, myfile1, myfile2])
      cy.get('#fileList').children().should('have.length', 3)
   })

   it.only('verify the change name of file during upload', function () {
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
      let myfile = 'tarangan.xlsx'
      cy.get('#filesToUpload')
         .attachFile({ filePath: myfile, fileName: 'newname.xlsx' })
      cy.get('#fileList').children().should('have.length', 1)
      cy.get('#fileList').children().first().should('contain', 'newname')
   })
})
