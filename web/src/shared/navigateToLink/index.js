export default function navigateToLink(history, type, category, id, code, categoryId) {
  switch (type) {
    case 'event':
    case 'attractions':
      history.push(`/events/${code}`);
      break;
    case 'promotion':
      history.push(`/promotions/${categoryId}/${id}`);
      break;
    case 'faq':
      history.push(
        `/faq/${category.toLowerCase().replace(/[^a-z]/g, '')}?id=${id}`
      );
      break;
    case 'explore':
      history.push(`/explore`);
      break;
    default:
  }
}
