create trigger handle_updated_at before update on entry
  for each row execute procedure moddatetime (updated_at);