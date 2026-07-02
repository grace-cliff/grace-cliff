// Pins "About Page" to a single fixed document so it behaves as a
// singleton in the Studio UI — no "create new" option, no risk of
// accidentally ending up with two About pages.
export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About Page')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) => listItem.getId() !== 'aboutPage'),
    ])
