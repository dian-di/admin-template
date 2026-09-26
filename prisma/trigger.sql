create trigger handle_updated_at before update on demo
  for each row execute procedure moddatetime (updated_at);
