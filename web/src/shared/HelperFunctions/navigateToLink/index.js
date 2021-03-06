export default function navigateToLink(history, type, category, id, code, tid) {
  switch (type.toLowerCase()) {
    case 'event':
    case 'attractions':
      history.push(`/events/${code}`);
      break;
    case 'promotion':
      history.push(`/promotions/${tid}/${id}`);
      break;
    case 'faq':
      history.push(
        `/faq/${category
          .toLowerCase()
          .replace(/\//g, '-')
          .replace(/\s/g, '-')}?id=${id}`
      );
      break;
    case 'explore':
      history.push(`/explore`);
      break;
    default:
  }
}
