
-- Allow anyone to update presentations (no auth required)
DROP POLICY "Users can update their own presentations" ON public.presentations;
CREATE POLICY "Anyone can update presentations"
ON public.presentations
FOR UPDATE
USING (true);

-- Allow anyone to insert presentations
DROP POLICY "Users can create their own presentations" ON public.presentations;
CREATE POLICY "Anyone can create presentations"
ON public.presentations
FOR INSERT
WITH CHECK (true);

-- Allow anyone to delete
DROP POLICY "Users can delete their own presentations" ON public.presentations;
CREATE POLICY "Anyone can delete presentations"
ON public.presentations
FOR DELETE
USING (true);

-- Make user_id nullable since we no longer use auth
ALTER TABLE public.presentations ALTER COLUMN user_id DROP NOT NULL;
