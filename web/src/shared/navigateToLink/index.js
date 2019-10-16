export default function navigateToLink(history, type, category, id) {
  switch (type) {
    case 'event':
    case 'attractions':
      history.push(`/events/${id}`);
      break;
    case 'promotion':
      history.push(`/promotions`);
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
