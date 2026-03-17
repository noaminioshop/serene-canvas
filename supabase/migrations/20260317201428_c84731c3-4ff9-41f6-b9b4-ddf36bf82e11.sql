
-- Create app_settings table for storing edit password
CREATE TABLE public.app_settings (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key text NOT NULL UNIQUE,
  value text NOT NULL
);

-- Enable RLS
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

-- Anyone can read settings (to verify password)
CREATE POLICY "Anyone can read settings"
ON public.app_settings
FOR SELECT
USING (true);

-- No one can modify via API (admin only via SQL)
-- Insert the default edit password
INSERT INTO public.app_settings (key, value) VALUES ('edit_password', '123456');
